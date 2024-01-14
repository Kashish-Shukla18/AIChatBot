import { AppBar, Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import { UserAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';
const Header = () => {
  const auth = UserAuth();
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <NavigationLink
                  bg='#00fffc'
                  to='/chat'
                  text='Go to Chat'
                  textColor='black' />
                <NavigationLink
                  bg='#51538f'
                  to='/'
                  text='logout'
                  onClick={auth.logout} textColor='white' />
              </>
            ) : (
              <>
                <NavigationLink bg='#00fffc' to='/login' text='Login' textColor='black' />
                <NavigationLink
                  bg='#51538f'
                  to='/signup'
                  text='signup'
                  textColor='white' />
              </>)}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header