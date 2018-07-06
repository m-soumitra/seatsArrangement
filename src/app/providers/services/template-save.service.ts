import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class TemplateSaveService {
    private _saveSeatsTemplate = environment.saveTemplate;


    constructor(private _httpClient: HttpClient) { }
    public saveTemplateService(seats) {
        if (environment.production) {
            const floorId = '2';
            const wingId = 'C1';
            const bayName = 'Bay1';
            let httpParams = new HttpParams();
            httpParams = httpParams.append('floorId', floorId).append('wingId', wingId).append('bayName', bayName);
            console.log(httpParams);
            return this._httpClient.post(this._saveSeatsTemplate, seats, {
                params: httpParams
            });
        } else {
            return this._httpClient.post(this._saveSeatsTemplate, seats);
        }
    }
}
