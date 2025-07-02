import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import { cinestarTheaters } from "@/util/theaters"

export function QuickBook() {
  return (
    <div className="font-anton mt-6 p-6 flex flex-col md:flex-row gap-10 md:justify-between  md:items-center border rounded-sm w-full">
        <p className="text-xl w-full md:w-[300px] text-center">ĐẶT VÉ NHANH</p>
            <div className="flex flex-col justify-between md:flex-row gap-5 w-full">
            <Select>
                <SelectTrigger className="w-full justify-center">
                    <SelectValue placeholder="Chọn rạp" />
                </SelectTrigger>
                <SelectContent>
                    {cinestarTheaters.map((theater) => (
                    <SelectItem key={theater._id} value={theater._id}>
                        {theater.name} – {theater.district}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full justify-center">
                    <SelectValue placeholder="Chọn phim" />
                </SelectTrigger>
                <SelectContent>
                    {cinestarTheaters.map((theater) => (
                    <SelectItem key={theater._id} value={theater._id}>
                        {theater.name} – {theater.district}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full justify-center">
                    <SelectValue placeholder="Chọn ngày" />
                </SelectTrigger>
                <SelectContent>
                    {cinestarTheaters.map((theater) => (
                    <SelectItem key={theater._id} value={theater._id}>
                        {theater.name} – {theater.district}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full justify-center">
                    <SelectValue placeholder="Chọn suất" />
                </SelectTrigger>
                <SelectContent>
                    {cinestarTheaters.map((theater) => (
                    <SelectItem key={theater._id} value={theater._id}>
                        {theater.name} – {theater.district}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button className="font-josefin  w-full md:w-[100px]">ĐẶT NGAY</Button>
            </div>
        </div>

    </div>

  )
}
