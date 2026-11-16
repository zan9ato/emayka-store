import {Suspense} from "react";
import Storefront from "./storefront";
export default function HomePage(){return <Suspense fallback={null}><Storefront/></Suspense>;}
