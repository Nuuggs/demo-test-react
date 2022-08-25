import renderer from "react-test-renderer";
import Link from "./Link";

it("changes the class when hovered", () => {
  // Arrange
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  // Assert
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Act
  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // Assertion
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Act
  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // Assertion
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
