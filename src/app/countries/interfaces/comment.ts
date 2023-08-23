import { Editor } from "ngx-editor";

export interface Comment {
  id: any;
  userLogo: string;
  userName: string;
  date: Date;
  content: string;
  editor: any;
}