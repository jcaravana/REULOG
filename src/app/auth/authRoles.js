/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['Administrador'],
  gestor: ['Administrador', 'Gerente'],
  estoque: ['Administrador', 'Gerente', 'Estoque'],
  producao: ['Administrador', 'Gerente', 'Produção'],
  logistica: ['Administrador', 'Gerente', 'Logística'],
  user: ['Administrador', 'Gerente', 'Estoque', 'Produção', 'Logística'],
  onlyGuest: [],
};

export default authRoles;
