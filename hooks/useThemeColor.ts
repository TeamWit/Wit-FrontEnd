/**
 * 단일 컬러 테마를 적용한 코드
 */

import Colors from "@constants/colors"; // 컬러셋 가져오기

export function useThemeColor(
  props: { color?: string },
  colorName: keyof typeof Colors
) {
  return props.color ?? Colors[colorName]; // props로 지정된 색상이 없으면 기본 Colors에서 가져오기
}
