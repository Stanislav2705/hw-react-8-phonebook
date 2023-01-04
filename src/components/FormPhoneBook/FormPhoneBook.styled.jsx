import { Field } from "formik";
import styled from "styled-components";

export const Block = styled.div`
 display: block;
`

export const LabelForm = styled.label`
  font-size: 20px;
  margin-right: 10px;
`
export const Input = styled(Field)`
  font-size: 16px;
  padding: 10px;
  outline: none;
  border: 1px solid orange;
  border-radius: 10px;
`
export const Text = styled.p`
  padding: 0px;
  line-height: 0px;
  color: white;
`
export const Button = styled.button`
  padding: 8px;
  width: 150px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  border-color: #ffa500;
  background-color: #fff;
  color: orange;
  font-size: 18px;
  &:hover,
  &:focus {
    background-color: orange;
    color: #fff;
  }
`
export const Container = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  border: 1px solid orange;
  border-radius: 10px;
  background-color: orange;
  padding-bottom: 20px;
`
