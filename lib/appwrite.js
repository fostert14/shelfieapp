import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("680bf30400229f33d68f")
  .setPlatform("com.fosterdev.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
