export class NewCourseModel {
  constructor(
    public last: string,
    public symbol: string,
    public timestamp: Date,
    public userId: string,
  ) {}
}
