"use client";

import { Sidebar } from "flowbite-react";

export default function MenuSidebar() {
  return (
    <>
      <Sidebar className="bg-transparent">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              price
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Home
            </Sidebar.Item>
            
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
