import { Strategy as LocalStategy } from 'passport-local';
import { compare } from 'bcryptjs';

export function initializePassport(
  passport: any,
  getUserByEmail: any,
  getUserById: any
) {
  const authenticateUser = async (
    email: string,
    password: string,
    done: any
  ) => {
    const user = getUserByEmail(email);
    if (user === null) {
      return done(null, false, { message: 'Please check the email' });
    }
    try {
      if (await compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Please check the password' });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(
    'local',
    new LocalStategy(
      {
        usernameField: 'email'
      },
      authenticateUser
    )
  );

  passport.serializeUser((user: any, done: any) => done(null, user.id));
  passport.deserializeUser((id: any, done: any) => {
    return done(null, getUserById(id));
  });
}
