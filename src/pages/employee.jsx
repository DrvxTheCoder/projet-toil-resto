import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Employées | Touba Oil Resto </title>
      </Helmet>

      <UserView />
    </>
  );
}
