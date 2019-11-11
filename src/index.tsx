import { useState } from 'react'
import uuidv4 from 'uuid/v4'

export const useUniqueId = (prefix: string) => {
    const [uniqueId] = useState(`${prefix}-${uuidv4()}`)
    return uniqueId
}
