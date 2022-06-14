import { Category, CategoryProperties } from "./category";
import { forEach, omit } from "lodash";
import UniqueEntityId from "../../../@seedworks/value-objects/unique-entity-id.vo";

type CategoryDataProps = { props: CategoryProperties; id?: UniqueEntityId };

describe("Category Unit tests", () => {
  test("id should be a string", () => {
    const data: CategoryDataProps[] = [
      { props: { name: "test" } },
      { props: { name: "test" }, id: new UniqueEntityId() },
      { props: { name: "test" }, id: null },
      { props: { name: "test" }, id: undefined },
    ];

    forEach(data, (item) => {
      const category = new Category(item.props, item.id as any);

      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });

  test("Constructor of category", () => {
    // triple A - Arrange Act Assert

    let category = new Category({ name: "Category 1" });

    const props = omit(category.props, "created_at");

    expect(props).toStrictEqual({
      name: "Category 1",
      is_active: true,
      description: null,
    });

    const created_at = new Date();

    category = new Category({
      name: "Category 1",
      description: "Description 1",
      is_active: false,
      created_at,
    });

    expect(category.props).toStrictEqual({
      name: "Category 1",
      is_active: false,
      description: "Description 1",
      created_at,
    });

    category = new Category({
      name: "Category 1",
      description: "Description 1",
    });

    expect(category.props).toMatchObject({
      name: "Category 1",
      description: "Description 1",
    });

    category = new Category({
      name: "Category 1",
      is_active: false,
    });

    expect(category.props).toMatchObject({
      name: "Category 1",
      is_active: false,
    });

    category = new Category({
      name: "Category 1",
      created_at,
    });

    expect(category.props).toMatchObject({
      name: "Category 1",
      created_at,
    });
  });

  test("getter of name field", () => {
    const category = new Category({ name: "Category 1" });
    expect(category.name).toBe("Category 1");
  });

  test("getter and setter of description field", () => {
    let category = new Category({
      name: "Category 1",
      description: "Description 1",
    });

    expect(category.description).toBe("Description 1");

    category = new Category({
      name: "Category 1",
    });

    expect(category.description).toBeNull();

    category["description"] = "Other Description 1";

    expect(category.description).toBe("Other Description 1");

    category["description"] = undefined;

    expect(category.description).toBeNull();

    category["description"] = null;

    expect(category.description).toBeNull();
  });

  test("getter and setter of is_active field", () => {
    let category = new Category({
      name: "Category 1",
    });

    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Category 1",
      is_active: true,
    });

    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Category 1",
      is_active: false,
    });

    expect(category.is_active).toBeFalsy();

    category["is_active"] = false;

    expect(category.is_active).toBeFalsy();

    category["is_active"] = true;

    expect(category.is_active).toBeTruthy();
  });

  test("getter of created_at field", () => {
    const created_at = new Date();

    let category = new Category({
      name: "Category 1",
    });

    expect(category.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: "Category 1",
      created_at,
    });

    expect(category.created_at).toStrictEqual(created_at);
  });

  test("if update will update the name field", () => {
    const category = new Category({ name: "Category 1" });

    category.update({ name: "Category 2" });

    expect(category.name).toBe("Category 2");
    expect(category.description).toBeNull();
  });

  test("if update will update the description field", () => {
    const category = new Category({
      name: "Category 1",
      description: "Description 1",
    });

    category.update({ name: "Category 1", description: "Description 2" });

    expect(category.name).toBe("Category 1");
    expect(category.description).toBe("Description 2");
  });
});
