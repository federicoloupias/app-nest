export class CreateNoticeDTO {
    readonly story_title : string;
    readonly title: string;
    readonly author: string;
    readonly story_url: string;
    readonly url: string;
    readonly created_at: Date;
    readonly objectID: string;
    readonly isRemoved: Boolean;
}