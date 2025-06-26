import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Logout() {
  const { ecommerce_logout_url } = usePage().props;

  useEffect(() => {
    // Optional redirect after a short delay
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }, []);

  return (
    <>
     {ecommerce_logout_url ?
            (
                <iframe
                  src={ecommerce_logout_url}
                  style={{ display: 'none',  width: 0, height: 0, border: 0 }}
                />
              )
               : ''}
        <div className="p-10">
        <h2>Logging out...</h2>
        </div>
    </>
  );
}
