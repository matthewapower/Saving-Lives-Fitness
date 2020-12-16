import React from "react"
import { css } from "@emotion/core"

export default function OptionPicker({ name, options, onChange, selected }) {
  return (
    <div
      className="mb-4 relative"
      css={css`
        &:after {
          content: "";
          border-left: 1px solid black;
          border-bottom: 1px solid black;
          display: block;
          height: 10px;
          width: 10px;
          position: absolute;
          top: 15px;
          right: 12px;
          z-index: 1;
          transform: rotate(-45deg);
        }

        select {
          -webkit-appearance: none;
        }
      `}
    >
      {/* <Label>{name}</Label> */}
      <select
        onChange={onChange}
        value={selected}
        className="border border-secondary p-4 py-2 pr-8 rounded-full appearance-none relative"
      >
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
