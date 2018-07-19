/**
 * https://www.keycloak.org/docs-api/4.1/rest-api/index.html#_rolerepresentation
 */

export default interface RoleRepresentation {
  clientRole?: boolean;
  composite?: boolean;
  composites?: {
    client: Record<string, any>;
    realm: string[];
  };
  containerId?: string;
  description?: string;
  id?: string;
  name?: string;
}
