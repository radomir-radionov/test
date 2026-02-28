/**
 * DTO = Data Transfer Object
 * Returns only safe fields for the client (no password, internal fields).
 * Used whenever we send a user in the response.
 */

export function toUserDto(user) {
  if (!user) return null;
  return { id: user.id, email: user.email };
}
