export default function testIfComponentRender(component, shallow) {
  const element = shallow(component);

  return element;
}
