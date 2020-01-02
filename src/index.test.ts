import { renderHook } from '@testing-library/react-hooks'
import { useUniqueId } from '.'

test('should return the value "Home" with a uuid/v4 generated suffix', () => {
    const { result } = renderHook(() => useUniqueId('Home'))
    expect(result.current).toMatch(/^Home/)
})
