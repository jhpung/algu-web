import { Size } from "Common/enums";
import { Button } from "Components/atom/Button";
import { Loading } from "Components/atom/Loading";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [inProgress, setInProgress] = useState(false);
  return (
    <>
      <Head>ALGU</Head>
      <Button
        inProgress={inProgress}
        onClick={() => setInProgress(!inProgress)}
      >
        GO
      </Button>
    </>
  );
};

export default Home;
