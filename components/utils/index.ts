import { useBEM } from './bem'

// eslint-disable-next-line import/prefer-default-export
export function bem(name: string) {
  return useBEM(`eleph-${name}`)
}
