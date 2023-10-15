import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const permissao = localStorage.getItem('permissao');

//     if (permissao === 'Administrador') {
//       return true;
//     } else if (permissao === 'Visualizacao') {
//       this.router.navigate(['/home']);
//       return false;
//     } else if (permissao === 'Vendedor') {
//       this.router.navigate(['/home']);
//       return false;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(): boolean {
    const permissao = localStorage.getItem('permissao');
    return permissao === 'Administrador';
  }
}

@Injectable({
  providedIn: 'root'
})
export class VisualizacaoGuard implements CanActivate {
  canActivate(): boolean {
    const permissao = localStorage.getItem('permissao');
    return permissao === 'Visualizacao';
  }
}

@Injectable({
  providedIn: 'root'
})
export class VendedorGuard implements CanActivate {
  canActivate(): boolean {
    const permissao = localStorage.getItem('permissao');
    return permissao === 'Vendedor';
  }
}
