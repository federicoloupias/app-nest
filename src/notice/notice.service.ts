import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Notice } from './interfaces/notice.interface';
import { CreateNoticeDTO } from './dto/create-notice.dto';

@Injectable()
export class NoticeService {
  constructor(@InjectModel('Notice') private readonly noticeModel: Model<Notice>) { }

  async addNotice(createNoticeDTO: CreateNoticeDTO): Promise<Notice> {
    const newNotice = new this.noticeModel(createNoticeDTO);
    return await newNotice.save();
  }  

  async getNotice(noticeID: string): Promise<Notice> {
    try {
      const notice = await this.noticeModel.findOne({ _id: noticeID }).exec();
      console.log(notice);
      return notice;
    } catch (error) {
      return null;
    }
  }

  async getNotices(): Promise<Notice[]> {
    try {
      const res = await this.noticeModel.find();
      console.log("holaaaa", res as Notice[]);
      return res;
    } catch (error) {
      return null
    }
  }

  async editNotice(noticeID, createNoticeDTO: CreateNoticeDTO): Promise<Notice> {
    try {
      return await this.noticeModel.findByIdAndUpdate(noticeID, createNoticeDTO, { new: true }).exec();
    } catch (error) {
      return null;
    }

  }

  async deleteNotice(noticeID): Promise<any> {
    const deletedNotice = await this.noticeModel
      .findByIdAndRemove(noticeID);
    return deletedNotice;
  }
} 