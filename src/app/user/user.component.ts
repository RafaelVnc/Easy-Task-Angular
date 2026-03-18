import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: Boolean;
    @Output() select = new EventEmitter<string>(); // Pass the information that a specific user was selected to the component that is using UserComponent

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }
  
    onSelectUser() {
        this.select.emit(this.user.id);
    }

    // Signals approach
    // avatar = input.required<string>();
    // name = input.required<string>();

    // imagePath = computed(() => {
    //     return 'assets/users/' + this.avatar();
    // })

}
