import * as fs from 'fs';
import { textChangeRangeIsUnchanged } from 'typescript';
const commonPasswords = fs.readFileSync('./commonPasswords.txt', { encoding: 'utf8' });
const listCommonPasswords = commonPasswords.split('\n');
console.log(listCommonPasswords)

class Utilities {
  static passwordSchema(password: string) {
    //optimize this to be customizable in the future. 
    try {
      const regexIncludesNumAndSpecialChar = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
      // console.log("working regex: ", regexIncludesNumAndSpecialChar)
      if (!regexIncludesNumAndSpecialChar.test(password)) {
        throw new Error("All passwords must be 8 characters long and include 1 special character, 1 lower case character, 1 upper case character, a number");
      }
    } catch (err) {
      console.log(err);
    }
    return password;
  }
  static enforceStrongPassword(password: string) {
    try {
      if (listCommonPasswords.includes(password)) {
        throw new Error("Please include a stronger password. Your current password is among the top 500 most common passwords.");
      }
    } catch(err) {
      console.log(err);
    }
  }
  static passwordDuration(duration: number) {

  }
  
}

class TokenBucket {
  capacity: number;
  tokens: number;
  lastRefill: number;
  fillPerMinute: number;
  constructor(capacity: number, fillPerMinute: number) {
    this.capacity = capacity;
    this.tokens = this.capacity;
    this.lastRefill = Math.floor((Date.now() / 1000) / 60);
    this.fillPerMinute = fillPerMinute;
  }
  useToken() {
    this.refillTokens();
    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
  refillTokens() {
    const now = Math.floor((Date.now() / 1000) / 60);
    const rate = (now - this.lastRefill) / this.fillPerMinute;

    this.tokens = Math.min(this.capacity, this.tokens + Math.floor(rate * this.capacity));
    this.lastRefill = now;
  }
}

export {
  Utilities,
  TokenBucket
}