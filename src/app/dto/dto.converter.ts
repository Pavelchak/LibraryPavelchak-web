import {GroupDTO} from "./group.dto";
import {Link} from "./link";

export class DTOConverter {
  public static jsonArrayToCollection(callback: Function, data: any[]): any[] {
    const array: any[] = [];
    data.forEach(element => array.push(callback(element)));
    return array;
  }

  public static jsonToGroupDTO(data: any): GroupDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    const students: Link = DTOConverter.jsonToLink('students', data._links.students);
    return new GroupDTO(data.id, data.name, self, students);
  }

  public static jsonToLink(rel: string, data: Link): Link {
    return new Link(rel, data.href);
  }
}
