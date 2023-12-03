// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (

 
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
          <style>
      #target_website {
        width: 888px;
        height: 300px;
        z-index: 2;
      }
    </style>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
             <iframe
      id="target_website"
      src="https://app-ext-raful-dev.azurewebsites.net/community/manage/general"
    >
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
