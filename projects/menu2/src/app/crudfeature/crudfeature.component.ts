import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFeatureService } from '../services/crud-feature.service';
import { HttpErrorResponse } from '@angular/common/http';
import { crud } from '../models/crud';

@Component({
  selector: 'app-crudfeature',
  templateUrl: './crudfeature.component.html',
  styleUrls: ['./crudfeature.component.scss']
})
export class CrudfeatureComponent implements OnInit {
  public datas: crud[] = [];
  public editData: crud;

  public userForm = this.fb.group({
    id: [0, Validators.required],
    name: ['', Validators.required],
    username: ['', Validators.required],
  });

  // modal
  public titleModal: string = '';

  constructor(
    private crudService: CrudFeatureService, 
    private fb: FormBuilder
  ) {
    this.editData = {} as crud
  }

  ngOnInit(): void {
    this.crudService.getData().subscribe(
      (response: crud[]) => {
        this.datas = response.map((item) => ({
          id: item.id,
          name: item.name,
          username: item.username,
        }));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  openModal(flag: string, data: crud) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#crud-modal');

    if (flag == 'add') {
      this.titleModal = 'Add'
    } else {
      this.titleModal = 'Edit'

      this.editData = data;
      this.userForm.setValue(this.editData);
    }

    container?.appendChild(button);
    button.click();
  }

  onSubmit(userForm: FormGroup) {    
    if (userForm.valid) {
      if (userForm.value.id == 0) {
        userForm.value.id = this.datas[this.datas.length - 1].id + 1;
        this.datas.push(userForm.value);
      } else {
        this.datas.find((data) => {
          if (data.id == userForm.value.id) {
            data.name = userForm.value.name;
            data.username = userForm.value.username;
          }
        });
      }

      userForm.reset({
        id: 0,
      });
      this.closeModal();
    }
  }

  deleteData(data: crud) {
    this.datas.splice(data.id-1, 1)
  }

  closeModal() {
    const container = document.getElementById('crud-modal');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-dismiss', 'modal');

    container?.appendChild(button);
    button.click();
  }
}