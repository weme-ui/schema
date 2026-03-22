import { RegistrySchema } from '../registry/schema'
import { RegistryLibrary } from '../registry/library'
import { LibraryItem } from '../registry/item'

export const AddedItem = LibraryItem.safeExtend({
  /**
   * The registry of the item
   */
  registry: RegistrySchema.pick({ name: true, version: true, hash: true }),
  /**
   * The library of the item
   */
  library: RegistryLibrary.pick({ name: true }),
}).meta({
  title: 'Added Registry Item',
  description: 'An registry item added to the project.',
})
