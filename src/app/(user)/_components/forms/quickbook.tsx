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
    <div className="font-anton mt-6 p-6 flex justify-between items-center border rounded-sm">
        <p className="text-xl ">ĐẶT VÉ NHANH</p>
        <div className="flex justify-between gap-3">
            <Select>
                <SelectTrigger className="">
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
                <SelectTrigger className="">
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
                <SelectTrigger className="">
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
                <SelectTrigger className="">
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
                <Button className="font-josefin">ĐẶT NGAY</Button>
            </div>
        </div>

    </div>

  )
}
