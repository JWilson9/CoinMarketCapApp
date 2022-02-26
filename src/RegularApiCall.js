import { useEffect, useState, useRef } from 'react';
import axios from 'src/utils/axios';

function RegularApiCall(props) {
  const mountedRef = useRef(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/v1/cryptocurrency/listings/latest');
        if (mountedRef.current && data?.data) {
          setData(data?.data);
          setIsLoading(false);
        }
      } catch (e) {
        if (mountedRef.current) {
          setError(e);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Regular API Call Example</h2>
      <code>{JSON.stringify(data?.[0])}</code>
    </div>
  );
}

export default RegularApiCall;
