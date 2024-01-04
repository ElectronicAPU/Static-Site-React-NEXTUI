import React from "react";
import MainLayout from "../../layout/MainLayout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import { FacebookIcon, GithubIcon } from "lucide-react";


const SignIn = () => {
  return (
    <>
      <MainLayout>
        <div className="flex justify-center items-center">
          <Card className="w-full lg:w-7/12 xl:w-6/12 2xl:w-4/12 h-full rounded-xl">
            <CardHeader className="flex flex-col justify-start ">
              <label className="text-2xl font-bold w-fit ">Create an account</label>
              <p className="text-foreground-500 text-sm">
                Enter your email below to create your account
              </p>
            </CardHeader>
            <CardBody>
              <div className="flex justify-between gap-4">
                <Button radius="sm" variant="ghost" className="w-full">
                  <GithubIcon className="w-4 " />
                  <span>Github</span>
                </Button>
                <Button radius="sm" variant="ghost" className="w-full">
                  <FacebookIcon className="w-4 " />
                  <span>Facebook</span>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-1 justify-center items-center py-4">
                <Divider className="w-full" />
                <div className="flex justify-center items-center text-sm lowercase">
                  or contunue with
                </div>
                <Divider className="w-full" />
              </div>
              <div className="flex flex-col gap-4">
                <Input required type="email" variant="faded" label="Email" />
                <Input
                  required
                  type="password"
                  variant="faded"
                  label="Password"
                />
              </div>
              <div className="mt-12">
                <Button variant="" className="dark:bg-white bg-black text-white h-12 dark:text-black font-semibold w-full ">Create a account</Button>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center items-center">
              <div>
                <span className="text-sm">Already have an account? <Link className="underline" href="/signin">Sign In</Link> </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default SignIn;
