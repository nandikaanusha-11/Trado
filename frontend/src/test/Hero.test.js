import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";//for the test to wait(in case it has to fetch)
import Hero from "../landing_page/home/Hero";


//test-Suite---many test cases are written together

describe("Hero Component",()=>{
 test('renders hero image',()=>{
    render(<Hero/>); 
    const heroImage=screen.getByAltText("Hero Image");
    //actual result that we expect from the test
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src");
    
 });
});