import { TemplateSaveService } from './../providers/services/template-save.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exel-utils',
  templateUrl: './exel-utils.component.html',
  styleUrls: ['./exel-utils.component.scss']
})
export class ExelUtilsComponent implements OnInit {

  public selectedFileName = 'No file selected';
  public selectedfile: File;
  public seats: Array<Array<Seat>> = new Array<Array<Seat>>();
  public selectedSeats: Array<Seat> = new Array<Seat>();

  constructor(private _templateSaveService: TemplateSaveService) { }

  ngOnInit() {
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFileName = fileList[0].name;
      this.selectedfile = fileList[0];
      console.log(this.selectedfile.type);
      const reader = new FileReader();
      reader.readAsText(this.selectedfile, 'UTF-8');
      reader.onload = (fileLoadEvent) => {
        const excelContentAsString = reader.result;
        const allRows = excelContentAsString.split('\n');

        for (let i = 0; i < allRows.length; i++) {
          if (allRows[i] || allRows[i].trim() !== '') {
            const cellValues = allRows[i].split(',');
            const rowSeats: Seat[] = this.fecthRowSeats(cellValues);
            this.seats.push(rowSeats);
          }
        }
        console.log(this.seats);
        this._templateSaveService.saveTemplateService(this.seats).subscribe(result => console.log('Done'));
      };
    }
  }

  public fecthRowSeats(rowCellsList: Array<string>) {
    const rowSeats: Seat[] = [];
    rowCellsList.forEach(eachCellValue => {
      const seatValues = eachCellValue.split('|');
      const eachSeat: Seat = new Seat(seatValues[0], seatValues[1], seatValues[2]);
      rowSeats.push(eachSeat);
    });
    return rowSeats;
  }

  public selectDeselectAvailableSeats(selectedSeat: Seat) {
    if (selectedSeat.currentlySelected) {
      const index = this.selectedSeats.indexOf(selectedSeat);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    } else {
      this.selectedSeats.push(selectedSeat);
    }
    selectedSeat.currentlySelected = !selectedSeat.currentlySelected;
  }

}

class Seat {
  seatNbr: string;
  occupancy: string;
  project: string;
  currentlySelected: boolean;

  constructor(seatNbr: string, occupancy: string, project: string) {
    this.seatNbr = seatNbr;
    this.occupancy = occupancy;
    this.project = project;
    this.currentlySelected = false;
  }
}
