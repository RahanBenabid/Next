/**
 * @jest-environment node
 */

import { act, create } from "react-test-renderer";
import PageComponentWeather from "../../../pages/components/weather";

describe("PageComponentWeather", () => {
  test("renders correctly", async () => {
    let component: any;

    // Arrange: Prepare the component to be tested
    await act(async () => {
      // Act: Execute the code that triggers the behavior to be tested
      component = await create(<PageComponentWeather></PageComponentWeather>);
    });

    // Assert: Verify that the behavior is as expected
    expect(component.toJSON()).toMatchSnapshot();
  });
});

test("clicks the h1 Element and updates the state", async () => {
  let component: any;
  await act(async () => {
    component = await create(<PageComponentWeather></PageComponentWeather>);
    component.root.findByType("h1").props.onClick();
  });
  expect(component.toJSON()).toMatchSnapshot();
});
