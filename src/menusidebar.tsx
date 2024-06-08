"use client";

import { Sidebar } from "flowbite-react";

export default function MenuSidebar() {
  return (
    <>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Home
            </Sidebar.Item>
            <Sidebar.Item href="#">
              shop
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Page
            </Sidebar.Item>
            <Sidebar.Item href="#" >
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
