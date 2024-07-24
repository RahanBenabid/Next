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
