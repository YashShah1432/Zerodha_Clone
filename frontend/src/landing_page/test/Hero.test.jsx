import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../home/Hero";

describe("Hero Component", () => {
    test("render hero image", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "./media/images/homeHero.png");
    })

    test("render signup button", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const signupBtn = screen.getByText("Signup Now");
        expect(signupBtn).toBeInTheDocument();
        expect(signupBtn).toHaveAttribute("type", "button");
    })
})