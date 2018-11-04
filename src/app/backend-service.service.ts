import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Patient, Doctor, PatientView } from "./patient";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { forEach } from "@angular/router/src/utils/collection";
import { promise } from "protractor";

@Injectable({
  providedIn: "root"
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}

  private patients: Patient[];
  private doctors: Doctor[];

  async initializeMemoryStorage(): Promise<any> {
    this.patients = <Patient[]>(
      await this.http.get<Patient[]>("./assets/data/patients.json").toPromise()
    );

    this.doctors = await this.http
      .get<Doctor[]>("./assets/data/doctors.json")
      .toPromise();

    console.log("Data Loaded from JSON Files");
  }

  getAllPatients(): Patient[] {
    return this.patients;
  }

  async getAllDoctors(): Promise<Doctor[]> {
    if (this.doctors === undefined) {
      await this.initializeMemoryStorage();
    }

    return this.doctors;
  }

  async getPatientView(): Promise<PatientView[]> {
    console.log(this.patients);
    let patientViewList = new Array<PatientView>();
    if (this.patients === undefined) {
      await this.initializeMemoryStorage();
    }

    this.patients.forEach(patient => {
      var doctor = this.doctors.filter(x => x.id == patient.doctor)[0];
      let tmpPatientView = new PatientView(patient, doctor);
      patientViewList.push(tmpPatientView);
    });

    return patientViewList;
  }
}
