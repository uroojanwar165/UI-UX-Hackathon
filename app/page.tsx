import Image from "next/image";
import React from "react";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/Arrivals";
import Topselling from "@/components/TopSelling";
import DressStyle from "@/components/DressStyle";
import CustomersReview from "@/components/Customers";
import LatestOffers from "@/components/LatestOffers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
      <TopHeader />
      <Header />
      <Hero />
      <NewArrivals />
      <Topselling />
      <DressStyle />
      <CustomersReview />
      <LatestOffers />
      <Footer />
   </div>
  );
}
