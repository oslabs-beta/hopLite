import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";

//hashed and compared are the bcrypt methods and are used as hoplite defaults.
class HashingMethodsBlueprint {
  async pwArgon2(password: string) {
    return await argon2.hash(password);
  };
  async hashed(inputPassword: string, salt: number = 10) {
    console.log('bcrypt input hashing works!');
    return await bcrypt.hash(inputPassword, salt);
  };
  async compareArgon2(inputPassword: string, hashedPassword: string) {
    return await argon2.verify(hashedPassword, inputPassword);
  };
  
  async compared(inputPassword: string, hashedPassword: string) {
    console.log('bcrypt comparison hashing works!');
    return await bcrypt.compare(inputPassword, hashedPassword);
  };
};

export { HashingMethodsBlueprint };

