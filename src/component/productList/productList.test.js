import React from "react";
import { shallow } from "enzyme";
import ProductList from "./productList";

describe("ProductList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});
