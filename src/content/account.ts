export type RoleStatus = {
  ketua: boolean;
  bendahara: boolean;
  sekretaris: boolean;
  pengurus: boolean;
};

export class Account {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  status: RoleStatus;

  constructor(
    id: string,
    name: string,
    email: string,
    photoUrl: string,
    status: RoleStatus
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.photoUrl = photoUrl;
    this.status = status;
  }

  static sampleData(): Account[] {
    return [
      new Account("1", "Ahmad Fajar", "ahmad@example.com", "/img/avatar.jpeg", {
        ketua: true,
        bendahara: false,
        sekretaris: false,
        pengurus: true,
      }),
      new Account("2", "Dina Salma", "dina@example.com", "/img/avatar.jpeg", {
        ketua: false,
        bendahara: true,
        sekretaris: false,
        pengurus: true,
      }),
      new Account("3", "Rizky Nur", "rizky@example.com", "/img/avatar.jpeg", {
        ketua: false,
        bendahara: false,
        sekretaris: true,
        pengurus: true,
      }),
    ];
  }
}
