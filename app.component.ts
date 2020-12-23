import { Component, Inject } from "@angular/core";

/**
 * Dropdown Tree plain data sample
 */
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  public countries: any[] = [
    { id: 1, name: "Australia", hasChild: true, expanded: true },
    { id: 2, pid: 1, name: "New South Wales" },
    { id: 3, pid: 1, name: "Victoria" },
    { id: 4, pid: 1, name: "South Australia" },
    { id: 6, pid: 1, name: "Western Australia" },
    { id: 7, name: "Brazil", hasChild: true },
    { id: 8, pid: 7, name: "Paraná" },
    { id: 9, pid: 7, name: "Ceará" },
    { id: 10, pid: 7, name: "Acre" },
    { id: 11, name: "China", hasChild: true },
    { id: 12, pid: 11, name: "Guangzhou" },
    { id: 13, pid: 11, name: "Shanghai" },
    { id: 14, pid: 11, name: "Beijing" },
    { id: 15, pid: 11, name: "Shantou" },
    { id: 16, name: "France", hasChild: true },
    { id: 17, pid: 16, name: "Pays de la Loire" },
    { id: 18, pid: 16, name: "Aquitaine" },
    { id: 19, pid: 16, name: "Brittany" },
    { id: 20, pid: 16, name: "Lorraine" },
    { id: 21, name: "India", hasChild: true },
    { id: 22, pid: 21, name: "Assam" },
    { id: 23, pid: 21, name: "Bihar" },
    { id: 24, pid: 21, name: "Tamil Nadu" },
    { id: 25, pid: 21, name: "Punjab" }
  ];
  public localData: any[] = [
    { id: 1, name: "Discover Music", hasChild: true, expanded: true },
    { id: 2, pid: 1, name: "Hot Singles" },
    { id: 3, pid: 1, name: "Rising Artists" },
    { id: 4, pid: 1, name: "Live Music" },
    { id: 7, name: "Sales and Events", hasChild: true },
    { id: 8, pid: 7, name: "100 Albums - $5 Each" },
    { id: 9, pid: 7, name: "Hip-Hop and R&B Sale" },
    { id: 10, pid: 7, name: "CD Deals" },
    { id: 11, name: "Categories", hasChild: true },
    { id: 12, pid: 11, name: "Songs" },
    { id: 13, pid: 11, name: "Bestselling Albums" },
    { id: 14, pid: 11, name: "New Releases" },
    { id: 15, pid: 11, name: "Bestselling Songs" },
    { id: 16, name: "MP3 Albums", hasChild: true },
    { id: 17, pid: 16, name: "Rock" },
    { id: 18, pid: 16, name: "Gospel" },
    { id: 19, pid: 16, name: "Latin Music" },
    { id: 20, pid: 16, name: "Jazz" },
    { id: 21, name: "More in Music", hasChild: true },
    { id: 22, pid: 21, name: "Music Trade-In" },
    { id: 23, pid: 21, name: "Redeem a Gift Card" },
    { id: 24, pid: 21, name: "Band T-Shirts" },
    { id: 25, name: "Fiction Book Lists", hasChild: true },
    { id: 26, pid: 25, name: "To Kill a Mockingbird" },
    { id: 27, pid: 25, name: "Pride and Prejudice" },
    { id: 28, pid: 25, name: "Harry Potter" },
    { id: 29, pid: 25, name: "The Hobbit" }
  ];
  public hierachicalData: { [key: string]: Object }[] = [
    {
      id: 1,
      name: "Steven Buchanan",
      hasChild: true,
      expanded: true
    },
    {
      id: 2,
      pid: 1,
      name: "Laura Callahan",
      hasChild: true
    },
    {
      id: 3,
      pid: 2,
      name: "Andrew Fuller",
      hasChild: true
    },
    {
      id: 4,
      pid: 3,
      name: "Anne Dodsworth"
    },
    {
      id: 10,
      pid: 3,
      name: "Lilly"
    },
    {
      id: 5,
      pid: 1,
      name: "Nancy Davolio",
      hasChild: true
    },
    {
      id: 6,
      pid: 5,
      name: "Michael Suyama",
      hasChild: true
    },
    {
      id: 7,
      pid: 6,
      name: "Robert King"
    },
    {
      id: 11,
      pid: 6,
      name: "Mary"
    },
    {
      id: 9,
      pid: 1,
      name: "Janet Leverling"
    }
  ];
  // Self-referential list data source for Dropdown Tree component
  public DDTreeFields: any[] = [
    {
      data: {
        dataSource: this.countries,
        value: "id",
        parentValue: "pid",
        text: "name",
        hasChildren: "hasChild"
      },
      id: "dropdown1"
    },
    {
      data: {
        dataSource: this.hierachicalData,
        text: "name",
        value: "id",
        parentValue: "pid",
        hasChildren: "hasChild"
      },
      id: "dropdown2"
    },
    {
      data: {
        dataSource: this.localData,
        value: "id",
        parentValue: "pid",
        text: "name",
        hasChildren: "hasChild"
      },
      id: "dropdown3"
    }
  ];
}
