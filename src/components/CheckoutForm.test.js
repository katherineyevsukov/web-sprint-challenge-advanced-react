import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const submitButton = screen.getByRole("button");

  userEvent.type(firstNameInput, "Spongebob");
  userEvent.type(lastNameInput, "Squarepants");
  userEvent.type(addressInput, "124 Conch St.");
  userEvent.type(cityInput, "Bikini Bottom");
  userEvent.type(stateInput, "Hawaii");
  userEvent.type(zipInput, "46789");
  userEvent.click(submitButton);

  await waitFor(() => {
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toHaveTextContent(/You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Spongebob Squarepants124 Conch St.Bikini Bottom, Hawaii 46789/i)
  });
});
