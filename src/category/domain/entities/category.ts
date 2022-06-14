import UniqueEntityId from "../../../@seedworks/value-objects/unique-entity-id.vo";
import Entity from "../../../@seedworks/entity/entity";

export type CategoryProperties = {
  name: string;
  is_active?: boolean;
  description?: string;
  created_at?: Date;
};

export class Category extends Entity<CategoryProperties> {
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    super(props, id);

    this.props.description = this.props.description ?? null;
    this.props.created_at = this.props.created_at ?? new Date();
    this.props.is_active = this.props.is_active ?? true;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get created_at(): Date {
    return this.props.created_at;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }
}