/**
 * 주석된 부분들은 HStack, VStack이 아닌 Stack으로 통합된 사용자 정의 컴포넌트일 경우 정렬 방향을 결정하는 예시임.
 *
 * Stack을 HStack, VStack으로 분리해 사용하는 것이 더 효율적이고 직관적이기에 따로 구성
 */

// type Orientation = 'horizontal' | 'vertical'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  // orientation: Orientation
  gap?: string // gap은 px, rem, em, 등 다양히 줄 수 있으므로 타입을 string으로 두고 초기값은 1rem으로 두겠음
  justify?: React.CSSProperties['justifyContent']
  align?: React.CSSProperties['alignItems']
}

// const orientationStyles: Record<Orientation, React.CSSProperties> = {
//   horizontal: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   vertical: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// }

function HStack({
  children,
  // orientation = 'vertical',
  gap = '1rem',
  justify = 'start',
  align = 'center',
  className,
  ...props
}: StackProps) {
  // const baseStyle = orientationStyles[orientation]
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justify,
        alignItems: align,
        gap,
        // ...baseStyle,
        // ...(justify && { justifyContent: justify }),
        // ...(align && { alignItems: align }),
      }}
      {...props}
    >
      {children}
    </div>
  )
}

function VStack({
  children,
  gap = '1rem',
  justify = 'start',
  align = 'stretch',
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
        alignItems: align,
        gap,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export { HStack, VStack }
