import UserService from './services/user.service.js';

async function startApp() {
  // Start services
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      username: 'John',
      email: 'john@gmail.com'
    });
    console.log('New User Created: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All Users: ', users);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Stop services
    await UserService.stop();
  }
}

startApp();
